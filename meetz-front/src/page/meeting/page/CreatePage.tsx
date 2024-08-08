import React, { useEffect } from 'react';
import SetMeetingHeader from '../components/CreateAndModify/SetMeetingHeader';
import SetMeetingNameBox from '../components/CreateAndModify/SetMeetingNameBox';
import SetMeetingStarBox from '../components/CreateAndModify/SetMeetingStarBox';
import SetMeetingFansBox from '../components/CreateAndModify/SetMeetingFansBox';
import SetMeetingFanCountBox from '../components/CreateAndModify/SetMeetingFanCountBox';
import SetTimeHeader from '../components/CreateAndModify/SetTimeHeader';
import SetTimeDateBox from '../components/CreateAndModify/SetTimeDateBox';
import SetTimeStartBox from '../components/CreateAndModify/SetTimeStartBox';
import SetTimeDuringBox from '../components/CreateAndModify/SetTimeDuringBox';
import SetTimeBreakBox from '../components/CreateAndModify/SetTimeBreakBox';
import FanListModal from '../components/CreateAndModify/FanListModal';
import useMeetingSettingStore from '../../../zustand/useMeetingSettingStore';
import useMeetingTimeStore from '../../../zustand/useMeetingTimeStore';
import { useNavigate } from 'react-router-dom';
import postMeetingToCreate from '../../../apis/meeting/createMeeting';
import useCheckAuth from "../../../hooks/meeting/useCheckAuth";
import fetchUserData from '../../../lib/fetchUserData';


const CreatePage: React.FC = () => {

  useCheckAuth('MANAGER');
  const navigate = useNavigate();
  const { isOpenModal, meetingName, stars, notBlackList, resetStore } = useMeetingSettingStore();
  const { selectedDate, selectedDuration, selectedTime, selectedBreak, resetTimeStore } = useMeetingTimeStore();
  const { accessToken } = fetchUserData();

  function convertTo24H(time: string): string {
    let [timePart, modifier] = time.split(' ');
    let [hours, minutes] = timePart.split(':');
    let hoursNum = parseInt(hours, 10);

    if (modifier.toUpperCase() === 'PM' && hoursNum !== 12) hoursNum += 12;
    if (modifier.toUpperCase() === 'AM' && hoursNum === 12) hoursNum = 0;

    return `${hoursNum.toString().padStart(2, '0')}:${minutes}`;
  }

  const saveHandler = async () => {
    if (!meetingName || !selectedDate || stars.length === 0 || notBlackList.length === 0) {
      alert('모든 항목을 입력해주세요!');
      return;
    }

    const meetingStart = `${selectedDate && selectedDate.toISOString().split('T')[0]} ${(selectedTime && convertTo24H(selectedTime.value))}`
    const starList = stars.map(star => {
      return { name: star };
    })

    const requestData = {
      meetingName,
      meetingStart,
      meetingDuration: selectedDuration ? parseInt(selectedDuration.value) : 0,
      term: selectedBreak ? parseInt(selectedBreak.value) : 0,
      starList,
      fanList: notBlackList,
    }
    try {
      const { data, code } = await postMeetingToCreate(requestData, accessToken || "");
      if (code === 200) {
        const { meetingId } = data;
        resetStore();
        resetTimeStore();
        navigate(`/meeting/detail/${meetingId}`)
      }
    } catch (error: any) {
      alert('항목을 모두 입력하세요');
    }
  }

  const cancelHandler = () => {
    navigate('/meeting/yet');
  }

  useEffect(() => {
    resetStore();
    resetTimeStore();
  }, [])

  return (
    <div className='flex flex-col items-center'>
      <div className='max-w-screen-xl w-screen px-24'>
        <header className='justify-center items-center flex flex-col gap-3 py-20'>
          <h1 className='text-4xl font-bold'>팬싸인회 생성</h1>
        </header>
        <main className='flex flex-col gap-20'>
          <div className='flex flex-col gap-1'>
            <SetMeetingHeader />
            <SetMeetingNameBox />
            <SetMeetingStarBox />
            <SetMeetingFansBox />
            <SetMeetingFanCountBox />
          </div>
          <div>
            <SetTimeHeader />
            <SetTimeDateBox />
            <SetTimeStartBox />
            <SetTimeDuringBox />
            <SetTimeBreakBox />
          </div>
        </main>
        <div className='flex justify-center items-center gap-4 py-20'>
          <button
            onClick={saveHandler}
            className='font-semibold text-white bg-[#ff4f5d] rounded-lg px-16 py-3'>
            저장
          </button>
          <button
            onClick={cancelHandler}
            className='font-semibold text-[#ff4f5d] border border-[#ff4f5d] rounded-lg px-16 py-3'>
            취소
          </button>
        </div>
      </div>
      {isOpenModal && <FanListModal />}
    </div>
  );
};

export default CreatePage;