import { Dog } from "lucide-react";
import "../upcoming-schedule.css";

export default function UpcomingSchedule() {
    return (
        <div>
            {/* <!-- From Uiverse.io by juyi_2230 --> */}
            <div className="meeting-card">
                <div className="header">
                    <div className="title">Atendimentos chegando</div>
                    <div className="date-selector" id="month-selector">
                        <span>Outubro</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            fill="currentColor"
                            viewBox="0 0 16 16"
                        >
                            <path
                                fillRule="evenodd"
                                d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                            ></path>
                        </svg>
                    </div>
                </div>

                <div className="calls-info">
                    <Dog />
                    <span>3 cachorros • Quinta-feira, 11</span>
                </div>

                <div className="date-nav-and-indicators">
                    <div className="date-nav-container">
                        <div className="day-item">
                            <div className="day-number">8</div>
                            <div className="day-name">Seg</div>
                        </div>
                        <div className="day-item">
                            <div className="day-number">9</div>
                            <div className="day-name">Ter</div>
                        </div>
                        <div className="day-item">
                            <div className="day-number">10</div>
                            <div className="day-name">Qua</div>
                        </div>
                        <div className="day-item day-active">
                            <div className="day-number">11</div>
                            <div className="day-name">Qui</div>

                        </div >

                    </div>

                </div>

                <div className="day-item">
                    <div className="day-number">12</div>
                    <div className="day-name">Sex</div>
                </div>
                <div className="day-item">
                    <div className="day-number">13</div>
                    <div className="day-name">Sáb</div>
                </div>
            </div >

            <div className="indicator-container">
                <div className="indicator-line"></div>
                <div className="indicator-dot"></div>
                <div className="indicator-dot"></div>
                <div className="indicator-dot"></div>
                <div className="indicator-dot indicator-active"></div>
                <div className="indicator-dot"></div>
                <div className="indicator-dot"></div>
            </div>
        </div >
    );
}