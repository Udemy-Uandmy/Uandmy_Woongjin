'use client';
import { useState } from 'react';

import CheckBoxList from '@/components/common/CheckBoxList';

import Button from '../common/Button';
import ProgressBar from '../common/ProgressBar';

interface StudyPeriodProps {
  onNext: (data: string) => void;
  onBack: () => void;
}
const StudyPeriod = ({ onNext, onBack }: StudyPeriodProps) => {
  const [selectedPeriod, setSelectedPeriod] = useState<string | null>('');

  const checkBoxDatas = [
    '1개월 이내',
    '1개월~3개월',
    '3개월~6개월',
    '6개월 이상',
  ];
  const handlePeriodClick = (period: string) => {
    //같은 period 두번 클릭 시 null
    if (selectedPeriod === period) {
      setSelectedPeriod(null);
    } else {
      setSelectedPeriod(period);
    }
  };

  const handleNextClick = () => {
    if (selectedPeriod) {
      onNext(selectedPeriod);
    }
  };
  return (
    <>
      <div className="w-full flex justify-center items-center flex-col space-y-4">
        <ProgressBar progress={100} page={4} />
        <div className="flex p-[0.938rem] justify-start flex-col gap-4">
          <div className="flex justify-start flex-col gap-4 w-full">
            <span className="text-[#262626] font-semibold text-2xl">
              김서희님의
            </span>
            <span className="text-[#262626] font-semibold text-2xl">
              예상 스터디 기간은 얼마인가요?
            </span>
            <p className="text-[#82829B] text-[0.875rem]">
              나와 비슷한 유저들과 스터디할 수 있도록 도와드려요!
            </p>
          </div>

          <div className="flex space-x-4 pt-10 pb-20">
            <CheckBoxList
              checkBoxDatas={checkBoxDatas}
              selectedValue={selectedPeriod}
              onChange={(value) => {
                handlePeriodClick(value as string);
              }}
              singleSelect
            />
          </div>

          <p className="text-[#ADB5BD] text-[0.75rem] text-center mb-2">
            내용은 다시 수정할 수 있어요!
          </p>
          <div className="flex justify-center items-center space-x-[0.813rem] ">
            <Button
              label="이전"
              onClick={onBack}
              bgColor="bg-white"
              textColor="text-[#CED4DA]"
              className="w-[7.75rem] h-[3.063rem] border-2 border-[#CED4DA] rounded-lg
          "
            />

            <Button
              label={
                !selectedPeriod ? '이제 마지막이에요' : '작성이 완료됐어요!'
              }
              onClick={handleNextClick}
              disabled={!selectedPeriod}
              className="w-[12.875rem] h-[3.063rem] bg-[#C6BBE1] text-white rounded-lg  "
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default StudyPeriod;
