import { Stack } from '../components/layout/Stack/Stack';
import { Badge } from '../components/ui/badge/Badge';
import { Button } from '../components/ui/button/Button';
import { Grid } from '../components/layout/grid/Grid';
import { Image } from '../components/ui/image/Image';

import './sample.css';
import { Card } from '../components/ui/card/Card';

const skills = ['HTML/CSS', 'JavaScript', 'React', 'Git/GitHub', 'Figma'];

const projects = [
    {
        title: '교내 동아리 모집 웹페이지',
        period: '2026.03 - 2026.04',
        summary: '동아리 소개/지원 폼/FAQ를 한 번에 볼 수 있는 반응형 페이지 제작',
        role: 'UI 제작, 컴포넌트 분리, 폼 유효성 검사 구현',
        stack: 'React, CSS Modules',
        result: '학급 친구 30명 이상이 실제로 사용하고 피드백 반영',
    },
    {
        title: '급식 알리미 미니 앱',
        period: '2026.01 - 2026.02',
        summary: '오늘/내일 급식 메뉴를 빠르게 확인할 수 있는 화면 구성',
        role: '카드 레이아웃 설계, 상태 관리, 배포',
        stack: 'React, Vite',
        result: '모바일 기준 첫 화면 진입 시간을 1초대까지 최적화',
    },
    {
        title: '포트폴리오 템플릿 제작',
        period: '2025.11 - 2025.12',
        summary: '고등학생 취업 준비생이 바로 수정해서 쓸 수 있는 템플릿 배포',
        role: '공통 컴포넌트 설계, 문서화, 유지보수',
        stack: 'React, GitHub Pages',
        result: '동아리 내 5명 이상이 템플릿을 사용해 자기소개 페이지 완성',
    },
];

const licenses = ['컴퓨터활용능력 2급(준비 중)', 'GTQ 1급', '정보처리기능사(필기 준비)'];

const strengths = ['요구사항을 이해한 뒤 화면으로 빠르게 구현', '피드백을 반영하며 결과물을 끝까지 완성', 'GitHub 이슈/커밋으로 작업 과정을 기록'];

export const SamplePage = () => {
    return (
        <main className="portfolio-page">
            <div className="bg-orb orb-a" />
            <div className="bg-orb orb-b" />

            <div className="portfolio-layout">
                <aside className="profile-column">
                    <Card style={{ backgroundColor: 'rgba(11, 18, 43, 0.88)', border: '1px solid rgba(148, 163, 184, 0.25)', gap: '1rem' }}>
                        <p className="kicker">HIGH SCHOOL PORTFOLIO</p>
                        <Image src="/favicon.svg" alt="김코딩 프로필 이미지" ratio="square" radius="full" fit="contain" style={{ width: '5rem' }} />
                        <h1>김코딩</h1>
                        <p className="profile-role">프론트엔드 취업 준비생</p>
                        <p className="profile-copy">학교 프로젝트를 사용자 관점으로 개선하고, 배포까지 책임지는 개발자입니다.</p>

                        <Stack organization="horizontal" style={{ gap: '0.5rem', flexWrap: 'wrap' }}>
                            <Badge>2027 졸업 예정</Badge>
                            <Badge>인턴 희망</Badge>
                            <Badge>인천</Badge>
                        </Stack>

                        <Stack style={{ gap: '0.4rem' }}>
                            <p>이메일: student.dev@example.com</p>
                            <p>GitHub: github.com/student-dev</p>
                        </Stack>

                        <Stack organization="horizontal" style={{ gap: '0.5rem', flexWrap: 'wrap' }}>
                            <Button style={{ backgroundColor: '#0ea5e9' }}>이력서 보기</Button>
                            <Button style={{ backgroundColor: '#374151' }}>연락하기</Button>
                        </Stack>
                    </Card>

                    <Card style={{ backgroundColor: 'rgba(14, 23, 54, 0.75)', border: '1px solid rgba(148, 163, 184, 0.2)' }}>
                        <h3>핵심 강점</h3>
                        <ul className="strength-list">
                            {strengths.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </Card>
                </aside>

                <section className="content-column">
                    <Card style={{ backgroundColor: 'rgba(12, 20, 48, 0.72)', border: '1px solid rgba(148, 163, 184, 0.2)', gap: '1.25rem' }}>
                        <Stack style={{ gap: '0.35rem' }}>
                            <p className="section-label">INTRODUCTION</p>
                            <h2>실무형 주니어로 성장 중입니다</h2>
                            <p>기획 의도를 이해하고 UI를 빠르게 구현하며, 배포 후 피드백까지 반영하는 흐름을 반복 훈련하고 있습니다.</p>
                        </Stack>
                        <Grid>
                            <Grid.Item>
                                <div className="metric-box">
                                    <p className="metric-title">프로젝트 완성</p>
                                    <p className="metric-value">8+</p>
                                    <p>학교/개인 프로젝트 기준</p>
                                </div>
                            </Grid.Item>
                            <Grid.Item>
                                <div className="metric-box">
                                    <p className="metric-title">협업 경험</p>
                                    <p className="metric-value">5회</p>
                                    <p>동아리/팀 과제 기준</p>
                                </div>
                            </Grid.Item>
                            <Grid.Item>
                                <div className="metric-box">
                                    <p className="metric-title">배포 경험</p>
                                    <p className="metric-value">10회</p>
                                    <p>GitHub Pages / Vercel</p>
                                </div>
                            </Grid.Item>
                        </Grid>
                    </Card>

                    <Card style={{ backgroundColor: 'rgba(12, 20, 48, 0.72)', border: '1px solid rgba(148, 163, 184, 0.2)', gap: '1rem' }}>
                        <Stack style={{ gap: '0.35rem' }}>
                            <p className="section-label">SKILLS</p>
                            <h2>기술 스택</h2>
                            <p>탄탄한 기본기와 협업 도구 숙련도를 함께 강화하고 있습니다.</p>
                        </Stack>
                        <div className="skills-wrap">
                            {skills.map((skill) => (
                                <Badge key={skill}>{skill}</Badge>
                            ))}
                        </div>
                    </Card>

                    <Card style={{ backgroundColor: 'rgba(12, 20, 48, 0.72)', border: '1px solid rgba(148, 163, 184, 0.2)', gap: '1rem' }}>
                        <Stack style={{ gap: '0.35rem' }}>
                            <p className="section-label">PROJECTS</p>
                            <h2>프로젝트 경험</h2>
                            <p>문제 정의, 구현, 개선까지의 흐름이 보이도록 정리했습니다.</p>
                        </Stack>

                        <Stack style={{ gap: '0.9rem' }}>
                            {projects.map((project) => (
                                <article className="project-row" key={project.title}>
                                    <div className="project-head">
                                        <h3>{project.title}</h3>
                                        <span>{project.period}</span>
                                    </div>
                                    <p>{project.summary}</p>
                                    <p>
                                        <strong>담당:</strong> {project.role}
                                    </p>
                                    <p>
                                        <strong>기술:</strong> {project.stack}
                                    </p>
                                    <p>
                                        <strong>성과:</strong> {project.result}
                                    </p>
                                </article>
                            ))}
                        </Stack>
                    </Card>

                    <Card style={{ backgroundColor: 'rgba(12, 20, 48, 0.72)', border: '1px solid rgba(148, 163, 184, 0.2)', gap: '1rem' }}>
                        <Stack style={{ gap: '0.35rem' }}>
                            <p className="section-label">PLAN</p>
                            <h2>자격증 · 학습 계획</h2>
                            <p>졸업 전까지 실무형 포트폴리오 5개 완성을 목표로 합니다.</p>
                        </Stack>
                        <ul className="license-list">
                            {licenses.map((license) => (
                                <li key={license}>{license}</li>
                            ))}
                        </ul>
                        <p className="closing">맡은 일은 책임감 있게 끝내고, 피드백은 빠르게 반영하는 신입이 되겠습니다.</p>
                    </Card>
                </section>
            </div>
        </main>
    );
};
