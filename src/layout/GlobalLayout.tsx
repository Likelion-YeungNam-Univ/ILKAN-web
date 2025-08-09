import { Outlet } from "react-router-dom";
import styles from "../css/GlobalLayout.module.css";
import ILKAN from "../assets/IL-KAN.png";
import BELL from "../assets/Bell.svg";
import ECLIPSE from "../assets/Eclipse.svg";

export default function GlobalLayout() {
  const jobMatchSubItems = ["디자인", "사진/영상", "개발", "법률", "기타"];
  const kanMatchSubItems = ["테마 일칸", "커스텀 일칸"];

  return (
    <div className={styles.wrapper}>
      {/* 사이드바 영역: div 대신 aside 태그 사용 */}
      <aside className={styles.sidebar}>
        <img src={ILKAN} alt="IL-KAN 로고" className={styles.logo} />

        {/* 이하 동일 */}
        <div className={styles.MYPAGE}>
          <button className={styles.Btn}></button>
          <div className={styles.Font}>MY PAGE</div>
        </div>

        <div className={styles.Line}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="2"
            viewBox="0 0 200 2"
            fill="none"
          >
            <path d="M0 1H200" stroke="#D9D9D9" />
          </svg>
        </div>

        <div className={styles.JOBMATCH}>
          <button className={styles.Btn}></button>
          <div className={styles.Font}>JOB MATCH</div>
        </div>

        <ul className={styles.subMenu}>
          {jobMatchSubItems.map((item, index) => (
            <li key={index} className={styles.subItem}>
              <button className={styles.subBtn}></button>
              <div className={styles.subFont}>{item}</div>
            </li>
          ))}
        </ul>

        <div className={styles.Line}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="200"
            height="2"
            viewBox="0 0 200 2"
            fill="none"
          >
            <path d="M0 1H200" stroke="#D9D9D9" />
          </svg>
        </div>

        <div className={styles.KANMATCH}>
          <button className={styles.Btn}></button>
          <div className={styles.Font}>KAN MATCH</div>
        </div>

        <ul className={styles.subMenu}>
          {kanMatchSubItems.map((item, index) => (
            <li key={index} className={styles.subItem}>
              <button className={styles.subBtn}></button>
              <div className={styles.subFont}>{item}</div>
            </li>
          ))}
        </ul>
      </aside>

      <div className={styles.iconGroup}>
        <img src={BELL} alt="알림 아이콘" className={styles.icon} />
        <img src={ECLIPSE} alt="상태 아이콘" className={styles.icon} />
      </div>

      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  );
}
