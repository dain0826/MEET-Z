import React, { useEffect } from 'react';
import SetMeetingHeader from '../components/CreateAndModify/SetMeetingHeader';
import SetMeetingNameBox from '../components/CreateAndModify/SetMeetingNameBox';
import SetMeetingStarBox from '../components/CreateAndModify/SetMeetingStarBox';
import SetMeetingFanCountBox from '../components/CreateAndModify/SetMeetingFanCountBox';
import SetTimeHeader from '../components/CreateAndModify/SetTimeHeader';
import SetTimeDateBox from '../components/CreateAndModify/SetTimeDateBox';
import SetTimeStartBox from '../components/CreateAndModify/SetTimeStartBox';
import SetTimeDuringBox from '../components/CreateAndModify/SetTimeDuringBox';
import SetTimeBreakBox from '../components/CreateAndModify/SetTimeBreakBox';
import FanListModal from '../components/CreateAndModify/FanListModal';
import useMeetingSettingStore from '../../../zustand/useMeetingSettingStore';
import useMeetingTimeStore from '../../../zustand/useMeetingTimeStore';
import { useNavigate, useParams } from 'react-router-dom';
import useCheckAuth from '../../../hooks/meeting/useCheckAuth';
import fetchUserData from '../../../lib/fetchUserData';
import getMeetingDetail from '../../../apis/meeting/getMeetingDetail';
import { StarDto } from '../../../types/types';
import {
  breakOptions,
  durationOptions,
  timeOptions,
} from '../components/CreateAndModify/TimeOptions';
import putMeetingToModify from '../../../apis/meeting/modifyMeeting';

const ModifyPage: React.FC = () => {
  const navigate = useNavigate();
  const { meetingId } = useParams<{ meetingId: string }>();

  useCheckAuth();
  const {
    isOpenModal,
    meetingName,
    stars,
    notBlackList,
    setTempNotBlackList,
    resetStore,
    setStars,
    saveNotBlackList,
    setMeetingName,
  } = useMeetingSettingStore();
  const {
    selectedDate,
    selectedDuration,
    selectedTime,
    selectedBreak,
    resetTimeStore,
    setSelectedDate,
    setSelectedDuration,
    setSelectedTime,
    setSelectedBreak,
  } = useMeetingTimeStore();
  const { accessToken } = fetchUserData();

  function convertTo24H(time: string): string {
    let [timePart, modifier] = time.split(' ');
    let [hours, minutes] = timePart.split(':');
    let hoursNum = parseInt(hours, 10);

    if (modifier.toUpperCase() === 'PM' && hoursNum !== 12) hoursNum += 12;
    if (modifier.toUpperCase() === 'AM' && hoursNum === 12) hoursNum = 0;

    return `${hoursNum.toString().padStart(2, '0')}:${minutes}`;
  }

  function convertTo12H(time: string): string {
    let [hours, minutes] = time.split(':');
    let hoursNum = parseInt(hours, 10);
    let modifier = 'am';

    if (hoursNum >= 12) {
      modifier = 'am';
      if (hoursNum > 12) {
        hoursNum -= 12;
      }
    }

    if (hoursNum === 0) {
      hoursNum = 12;
    }

    return `${hoursNum.toString().padStart(2, '0')}:${minutes} ${modifier}`;
  }

  const saveHandler = async () => {
    if (
      !meetingName ||
      !selectedDate ||
      stars.length === 0 ||
      notBlackList.length === 0
    ) {
      alert('모든 항목을 입력해주세요!');
      return;
    }

    if (!selectedTime || selectedTime.value === '') {
      alert('시작 시간을 다시 확인하세요!');
      return;
    }

    const starList = stars.map((star) => {
      return { name: star };
    });

    const requestData = {
      meetingName,
      meetingStart: selectedDate + ' ' + selectedTime.value,
      meetingDuration:
        (selectedDuration && parseInt(selectedDuration?.value)) || 0,
      term: (selectedBreak && parseInt(selectedBreak.value)) || 0,
      starList,
      fanList: notBlackList,
    };

    try {
      if (!meetingId) {
        return;
      }

      const { code } = await putMeetingToModify(
        requestData,
        +meetingId,
        accessToken || ''
      );
      if (code === 200) {
        resetStore();
        resetTimeStore();
        navigate(`/meeting/detail/${meetingId}`);
      }
    } catch (error: any) {
      alert('항목을 모두 입력하세요');
    }
  };

  const cancelHandler = () => {
    navigate('/meeting/yet');
  };

  const fetchMeetingDetail = async () => {
    if (meetingId) {
      const meetingIdNumber = parseInt(meetingId, 10);
      const { data, code } = await getMeetingDetail(
        meetingIdNumber,
        accessToken || ''
      );
      if (code === 200) {
        const {
          meetingName,
          meetingStart,
          meetingDuration,
          term,
          starList,
          fanList,
        } = data;

        const timeOption =
          timeOptions.find(
            (time) => time.value === meetingStart.split(' ')[1]
          ) || null;
        const durationOption =
          durationOptions.find(
            (option) => option.value === meetingDuration.toString()
          ) || null;
        const breakOption =
          breakOptions.find((option) => option.value === term.toString()) ||
          null;

        setSelectedTime(timeOption);
        setSelectedDuration(durationOption);
        setSelectedBreak(breakOption);
        setTempNotBlackList(fanList);
        saveNotBlackList();
        setMeetingName(meetingName);
        setStars(starList.map((star: StarDto) => star.name));
        setSelectedDate(meetingStart.split(' ')[0]);
      }
    }
  };

  useEffect(() => {
    fetchMeetingDetail();
  }, []);

  return (
    <div className='flex flex-col items-center'>
      <div className='max-w-screen-xl w-screen px-24'>
        <header className='justify-center items-center flex flex-col gap-3 py-20'>
          <h1 className='text-4xl font-bold'>미팅 수정</h1>
        </header>
        <main className='flex flex-col gap-20'>
          <div className='flex flex-col gap-1'>
            <SetMeetingHeader />
            <SetMeetingNameBox />
            <SetMeetingStarBox />
            {/* <SetMeetingFansBox /> */}
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
            className='font-semibold active:scale-95 duration-100 ease-in-out transform hover:scale-105 hover:bg-[#ff626f] transition text-white bg-[#ff4f5d] rounded-2xl px-16 py-3'
          >
            저장
          </button>
          <button
            onClick={cancelHandler}
            className='font-semibold text-[#ff4f5d] active:scale-95  border border-[#ff4f5d] hover:border-[#FF4F5D] focus:outline-none focus:border-[#FF4F5D] transition duration-100 ease-in-out transform hover:bg-[#ff4f5d] hover:text-white hover:scale-105 rounded-2xl px-16 py-3'
          >
            취소
          </button>
        </div>
      </div>
      {isOpenModal && <FanListModal />}
    </div>
  );
};

export default ModifyPage;
