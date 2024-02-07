import React, { useState, useEffect } from "react";
import Project from "../components/Project";
import { useMediaQuery } from "react-responsive";

import HW1 from "../assets/hamyang/HW1.jpg";
import HW2 from "../assets/hamyang/HW2.jpg";
import HW3 from "../assets/hamyang/HW3.JPG";

import GS1 from "../assets/Goseong/GS1.JPG";
import GS2 from "../assets/Goseong/GS2.JPG";
import GS3 from "../assets/Goseong/GS3.png";

import SMC1 from "../assets/smartcity/smartcity1.jpg";
import SMC2 from "../assets/smartcity/smartcity2.jpg";
import SMC3 from "../assets/smartcity/smartcity3.jpg";

import MSIT1 from "../assets/MSIT/MSIT1.PNG";
import MSIT2 from "../assets/MSIT/MSIT2.PNG";
import MSIT3 from "../assets/MSIT/MSIT3.jpg";
import MSIT4 from "../assets/MSIT/MSIT4.JPG";
import MSIT5 from "../assets/MSIT/MSIT5.JPG";


import BELL1 from "../assets/BELL/bell1.jpg";
import BELL2 from "../assets/BELL/bell2.png";
import BELL3 from "../assets/BELL/bell3.JPG";
import BELL4 from "../assets/BELL/bell4.jpg";
import BELL5 from "../assets/BELL/bell5.jpg";
import BELL6 from "../assets/BELL/bell6.JPG";

function ProjectContainer() {
  const projects = [
    {
      id: 1,
      name: "[과기부] 2023 스마트빌리지 1인가구 돌봄 사업",
      info: `사업 운영 및 프로젝트 매니징, 대시보드·앱 기획 및 설계,
사업 제안을 통한 연 15억원 사업비 확보`,
      tag: ["사업계획서 작성", "Project Managing", 
"대시보드 기획 및 개발", "앱 기획"],
      image: [BELL1, BELL2, BELL3, BELL4, BELL5, BELL6],
      url: "https://drive.google.com/file/d/1WNgeF5wqoOrLMv1262sHOmir2LovdaK7/view?usp=drive_link",
      mode: "web",
      role: [
        "Project manager", "Service Planner",
      ],
    },

    {
      id: 2,
      name: "[과기부] 공공조달 연계 R&D 실증 사업화 지원 사업",
      info: `라이프로그 추출을 위한 행동 분석 및 기획, 
ADL 추출, 특허 출원 등 R&D 과제 운영`,
      tag: [
        "데이터 시각화",
        "사업계획서 작성",
        "Project Managing",
        "시험인증",
        "사업비 관리",
        "실증 운영",
        "특허 출원",
      ],
      image: [MSIT2, MSIT1, MSIT3, MSIT4, MSIT5],
      url: "https://drive.google.com/file/d/1Ihu_vWhvMq4la5QNRYrbOXsjQQzV7l4O/view?usp=drive_link",
      mode: "web",
      role: ["Project manager", "Data analyst"],
    },

    {
      id: 3,
      name: "[국토부] 2021 스마트시티챌린지사업",
      info: `부산 도시철도 내 실내 배리어프리 내비게이션 구축을 위한 실무 수행, 
교통약자 내비게이션 앱 기획 및 데이터 분석`,
      tag: ["내비게이션 앱 기획", "실증 운영", "고객 페르소나 설정", "과제 운영", "사업비 관리"],
      image: [SMC1, SMC2, SMC3],
      url: "https://drive.google.com/file/d/1WNgeF5wqoOrLMv1262sHOmir2LovdaK7/view?usp=drive_link",
      mode: "web",
      role: [
        "Service Planner", "Product manager",
      ],
    },

    {
      id: 4,
      name: "[고성군] 삼산면 기초생활거점 개발사업",
      info: `고성군 내 열악한 문화복지 여건 개선 및 거점 발전 계획 수립`,
      tag: [
        "계획 수립",
        "BC 분석",
        "배치도 작성",
        "거점 설계",
        "법적 검토",
        "토지 매입",
        "사업 운영",
      ],
      image: [GS1, GS2, GS3],
      url: "https://drive.google.com/file/d/1Db7jGgLPTvB-5_g1IpHqXLe9MCu4moP-/view?usp=drive_link",
      mode: "web",
      role: ["City Planner", "Consultant"],
    },
  
    {
      id: 5,
      name: "[함양군] 신활력플러스 기본계획",
      info: `함양 항노화 엑스포와 연계한 기본계획 수립, 
시·군 단위 자금 계획 수립 및 사업 기획`,
      tag: ["사업계획서 작성", "계획 수립", "과제 발굴", "일정 관리", "자금 편성", "기본 계획"],
      image: [HW1, HW2, HW3],
      mode: "web",
      role: ["City Planner","Consultant"],
    },
  
  ];

  let [mode, setMode] = useState("");

  const isPc = useMediaQuery({
    query: "(min-width:768px)",
  });
  const isMobile = useMediaQuery({
    query: "(max-width:767px)",
  });

  useEffect(() => {
    if (isPc) setMode("isPc");
    else if (isMobile) setMode("isMobile");
  }, [isMobile, isPc]);

  return (
    <>
      <Project projects={projects} mode={mode} />
    </>
  );
}

export default ProjectContainer;
