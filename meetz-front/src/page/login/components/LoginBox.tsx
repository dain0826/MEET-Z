import { Link } from 'react-router-dom';
import logo from '/src/assets/images/logo.png';
import { useState } from 'react';
import useEmailValidation from '../../../hooks/form/useEmailValidation';
import usePasswordValidation from '../../../hooks/form/usePasswordValidation';
import { useUserStore } from '../../../zustand/useUserStore';

const LoginBox = () => {
  const [isManager, setIsManager] = useState(false);
  const { loginHandler } = useUserStore();

  const { email, isValidEmail, handleEmailChange } = useEmailValidation();
  const { password, isValidPassword, handlePasswordChange } = usePasswordValidation();

  const onChangeRadioBtn = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsManager(e.target.value === 'manager');
  }

  const formClickHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValidEmail) {
      alert('올바르지 않은 이메일 형식입니다.');
      return;
    }

    if (!isValidPassword) {
      alert('비밀번호는 8글자 이상이며, 특수문자를 포함해야 합니다.')
      return;
    }

    // 로그인 API 요청 보내기
    try {
      await loginHandler(email, password, isManager);
      // 매니저 여부에 따라 라우팅 처리하기
      alert("로그인에 성공했습니다.")
    } catch (error: any) {
      if (error.message === '존재하지 않는 회원입니다.') {
        alert('존재하지 않는 회원입니다.');
      } else if (error.message === '올바른 형식이 아닙니다.') {
        alert('올바른 형식이 아닙니다.');
      } else {
        alert('로그인 중 오류가 발생했습니다.');
      }
    }
  }

  return (
    <div className='bg-white rounded-2xl  w-[464px] h-[479px] flex flex-col items-center'>
      <form className='w-[360px] flex flex-col mt-[64px]' onSubmit={(e) => formClickHandler(e)}>
        <div className='mb-10'>
          <img src={logo} alt='Meet:Z 로고' className='w-[102px] h-[19px]' />
        </div>
        <div className='flex mb-4 w-full'>
          <label className='mr-4 flex items-center'>
            <input
              type='radio'
              name='userType'
              value='fan'
              className='mr-2 form-radio accent-[#FF4F5D]'
              checked={!isManager}
              onChange={onChangeRadioBtn}
            />
            <span className='text-[16px]'>팬 / 아이돌</span>
          </label>
          <label className='flex items-center'>
            <input
              type='radio'
              name='userType'
              value='manager'
              className='mr-2 form-radio accent-[#FF4F5D]'
              checked={isManager}
              onChange={onChangeRadioBtn}
            />
            <span className='text-[16px]'>매니저</span>
          </label>
        </div>
        <input
          type='text'
          placeholder='이메일 또는 임시 아이디'
          value={email}
          onChange={handleEmailChange}
          className='w-full focus:border-[#FF4F5D] focus:outline-none p-4 mb-4 border border-[#C4C4C4] rounded-lg text-[16px]'
        />
        <input
          type='password'
          placeholder='비밀번호'
          value={password}
          onChange={handlePasswordChange}
          className='focus:border-[#FF4F5D] focus:outline-none w-full p-4  mb-3 border  border-[#C4C4C4] rounded-lg text-[16px]'
        />
        <div className='text-right w-full mb-8'>
          <Link to='/signup' className='text-[#C4C4C4] underline text-[16px]'>
            STAFF 회원가입
          </Link>
        </div>
        <button className='w-full bg-[#FF4F5D] text-white p-4 rounded-lg text-[16px]'>
          로그인
        </button>
      </form>
    </div>
  );
};

export default LoginBox;