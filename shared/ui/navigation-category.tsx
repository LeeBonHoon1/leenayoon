"use client";

import * as React from "react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export default function NavigationCategory() {
  return (
    <div className="absolute top-0 left-0 right-0 z-30 hidden md:flex justify-center items-center py-6 px-8">
      <NavigationMenu>
        <NavigationMenuList className="gap-6">
          <NavigationMenuItem>
            <NavigationMenuLink
              href="#home"
              className="text-white text-lg font-semibold px-6 py-3 hover:text-black focus:text-black transition-colors"
            >
              홈
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="#about"
              className="text-white text-lg font-semibold px-6 py-3 hover:text-black focus:text-black transition-colors"
            >
              아카데미 소개
            </NavigationMenuLink>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent text-white text-lg font-semibold px-6 py-3 hover:text-black focus:text-black data-[state=open]:text-black transition-colors">
              교육 과정
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                <li className="row-span-3">
                  <NavigationMenuLink asChild>
                    <a
                      className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-slate-50 to-slate-100 p-6 no-underline outline-none focus:shadow-md"
                      href="#courses"
                    >
                      <div className="mb-2 mt-4 text-lg font-medium text-slate-900">
                        전문 교육 과정
                      </div>
                      <p className="text-sm leading-tight text-slate-600">
                        현장에서 즉시 활용 가능한 실질적인 기술을 익히는 전문
                        실무 과정입니다.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-black focus:text-black"
                      href="/courses/semi-permanent-smp"
                    >
                      <div className="text-sm font-medium leading-none">
                        반영구/SMP
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-slate-600">
                        섬세한 디자인 감각과 전문적인 기술력을 바탕으로 반영구
                        화장 및 두피 문신 전문가로서의 길을 제시합니다.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-black focus:text-black"
                      href="/courses/wedding-makeup"
                    >
                      <div className="text-sm font-medium leading-none">
                        웨딩메이크업 실무과정
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-slate-600">
                        웨딩 메이크업 전문가가 되기 위한 실무 중심의 교육
                        과정입니다.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:text-black focus:text-black"
                      href="/courses/wedding-upstyle"
                    >
                      <div className="text-sm font-medium leading-none">
                        웨딩업스타일 실무과정
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-slate-600">
                        웨딩 업스타일 전문가 양성을 위한 실무 중심 교육
                        과정입니다.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger className="bg-transparent text-white text-lg font-semibold px-6 py-3 hover:text-black focus:text-black data-[state=open]:text-black transition-colors">
              자격증 과정
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className="block select-none space-y-1 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:text-black focus:text-black"
                      href="/courses/hair-certification"
                    >
                      <div className="text-sm font-medium leading-none">
                        헤어 국가자격증
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-slate-600">
                        미용사(일반) 국가자격증 취득을 위한 필기 및 실기 전
                        과정을 체계적으로 교육합니다.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className="block select-none space-y-1 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:text-black focus:text-black"
                      href="/courses/makeup-certification"
                    >
                      <div className="text-sm font-medium leading-none">
                        메이크업 국가자격증
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-slate-600">
                        메이크업 국가자격증 취득을 목표로 하는 분들을 위해, 각
                        과제별 맞춤형 집중 지도로 합격을 지원합니다.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
                <li>
                  <NavigationMenuLink asChild>
                    <a
                      className="block select-none space-y-1 rounded-md p-4 leading-none no-underline outline-none transition-colors hover:text-black focus:text-black"
                      href="/courses/eyebrow-certification"
                    >
                      <div className="text-sm font-medium leading-none">
                        이용사 국가자격증
                      </div>
                      <p className="line-clamp-2 text-sm leading-snug text-slate-600">
                        이용 분야의 전문성을 인정받는 이용사 자격증 취득을 위한
                        이론 및 실기 과정을 전문적으로 지도합니다.
                      </p>
                    </a>
                  </NavigationMenuLink>
                </li>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuLink
              href="#contact"
              className="text-white text-lg font-semibold px-6 py-3 hover:text-black focus:text-black transition-colors"
            >
              문의하기
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
