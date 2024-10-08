'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

import BottomButton from '@/components/common/BottomButton';
import NavHeader from '@/components/common/NavHeader';
import PendingProfileCard from '@/components/common/PendingProfileCard';

interface ProfileDatas {
  id: string;
  name: string;
  job: string;
  totalStudy: number;
  attendance: number;
  text: string;
  tags: string[];
  registerDate: string;
}

const PendingRequest = () => {
  const router = useRouter();
  //대기중인 프로필
  const [profileData, setProfileData] = useState<ProfileDatas[]>([
    {
      id: '1',
      name: '제이크',
      job: '기획자',
      totalStudy: 8,
      attendance: 98,
      text: '안녕하세요. 개발 관련 글을 꾸준히 쓰고 싶은데 의지가 부족해 스터디 버디들을 구하고 싶습니다 화이팅',
      tags: ['손이 빠름', '열정적', '동기부여가 필요한'],
      registerDate: '2024년 06월 07일',
    },
    {
      id: '2',
      name: '박가현',
      job: '디자이너',
      totalStudy: 1,
      attendance: 100,
      text: '안녕하세요! 올해 졸업하고 취업 준비 중 경력도 쌓고 싶고 비슷한 사람들과 정보도 공유하고 싶어요!',
      tags: ['취준생', '논리적인', '책임감 있는'],
      registerDate: '2024년 06월 08일',
    },
  ]);

  const [acceptedCount, setAcceptedCount] = useState(0);
  const [totalCount, setTotalCount] = useState(4);

  const handleReject = (id: string) => {
    //해당 참여요청 거절버튼 클릭
    setProfileData((profiles) =>
      profiles.filter((profile) => profile.id !== id),
    );
  };
  const handleTotalCount = () => {
    setTotalCount(totalCount);
  };
  const handleAccept = (id: string) => {
    //해당 참여요청  수락버튼 클릭
    setAcceptedCount((count) => count + 1);
    //프로필 배열에서 제거
    setProfileData((profiles) =>
      profiles.filter((profile) => profile.id !== id),
    );
    //서버로 수락된 프로필 전달
  };
  const handleTotalAccept = () => {
    //전체 참여요청 수락버튼 클릭
    const totalProfile = [...profileData];
    if (totalProfile.length === 0) return;

    setAcceptedCount((count) => count + totalProfile.length);

    //서버로 수락된 프로필 전달 로직 필요

    setProfileData([]);
    router.push('/studyroomcreated');
  };

  return (
    <div>
      <NavHeader title="대기중인 요청" />
      <div className="flex justify-center items-center h-auto ">
        <div className="flex items-center flex-col w-[21.438rem] ">
          <div className="relative text-center space-y-5 ">
            {/* <hr className="w-[24.125rem] border-1 border-greyBorder mt-5 mb-5" /> */}
          </div>

          <PendingProfileCard
            ProfileData={profileData}
            handleReject={handleReject}
            handleAccept={handleAccept}
          />
          <div className="w-full right-0 left-0">
            <BottomButton
              label="전체 수락하기"
              acceptedCount={acceptedCount}
              totalCount={totalCount}
              onClick={handleTotalAccept}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default PendingRequest;
