import { Link } from "react-router-dom";
import styles from "../../css/components/globalLayout/MenuItem.module.css";

export interface SubItem {
  title: string;
  iconOn?: string;
  iconOff?: string;
}

interface MenuItemProps {
  title: string;
  link: string;
  iconOn?: string;
  iconOff?: string;
  subItems?: SubItem[];
  activeMain: string; // 현재 활성화된 메인 메뉴
  activeSub: string; // 현재 활성화된 서브 메뉴
  onSubItemClick?: (mainTitle: string, subTitle: string) => void;
}

export default function MenuItem({
  title,
  link,
  iconOn,
  iconOff,
  subItems,
  activeMain,
  activeSub,
  onSubItemClick,
}: MenuItemProps) {
  // 메인 메뉴 활성화 여부
  const isMainActive = activeMain === title;

  // 서브 메뉴 활성화 여부
  const isSubActive = (subTitle: string) => activeSub === subTitle;

  // 메인 메뉴 클릭 시
  const handleMainClick = () => {
    if (subItems && subItems.length > 0 && onSubItemClick) {
      onSubItemClick(title, subItems[0].title); // 첫 번째 서브 메뉴 자동 선택
    } else if (onSubItemClick) {
      onSubItemClick(title, "");
    }
  };

  return (
    <div className={styles.menuItem}>
      <Link
        to={link}
        onClick={handleMainClick}
        className={`${styles.mainMenu} ${isMainActive ? styles.active : ""}`}
      >
        {iconOn && iconOff && (
          <img src={isMainActive ? iconOn : iconOff} alt={title} />
        )}
        {title}
      </Link>

      {subItems && (
        <ul className={styles.subMenu}>
          {subItems.map((item) => (
            <li
              key={item.title}
              className={isSubActive(item.title) ? styles.active : ""}
              onClick={() =>
                onSubItemClick && onSubItemClick(title, item.title)
              }
            >
              {item.iconOn && item.iconOff && (
                <img
                  src={isSubActive(item.title) ? item.iconOn : item.iconOff}
                  alt={item.title}
                />
              )}
              <span>{item.title}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
