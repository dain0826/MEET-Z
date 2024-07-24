import { useNavigate } from "react-router-dom";
import useIsEndPage from "../../../hooks/meeting/useIsEndPage";
import { useState } from "react";

const MeetingListTitle = () => {
  const navigate = useNavigate();
  const [isEnd, setIsEnd] = useState(useIsEndPage());

  const handleButtonClick = () => {
    navigate('/meeting/create');
  }

  return (
    <div className='flex flex-col items-center '>
      <div className='max-w-screen-xl w-screen flex flex-col px-24 '>
        <div className='flex justify-between mt-16'>
          <h1 className='text-[32px] font-bold'>
            <span className='text-[#FF4F5D] mr-2'>SSAFY</span> 일정관리
          </h1>
          <button
            onClick={handleButtonClick}
            className={`bg-[#FF4F5D] text-white p-1 px-4 text-[20px] rounded-full ${isEnd ? 'hidden' : ''}`}
          >
            팬싸인회 생성
          </button>
        </div>
      </div>
    </div>
  )
}

export default MeetingListTitle