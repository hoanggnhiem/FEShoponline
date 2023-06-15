import { useCallback, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames/bind";
import styles from "./Toast.module.scss";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles);

// function showSuccessToast() {
//   toast({
//     title: "Thành công",
//     message: "Máy tính bạn đã kết nối thành công",
//     type: "success",
//     duration: 1000,
//   });
// }
// function showRemoveToast() {
//   toast({
//     title: "Thất bại",
//     message: "Máy tính bạn đã kết nối thất bại",
//     type: "error",
//     duration: 3000,
//   });
// }

function Toast({ toastList, setList }) {
  const deleteToast = useCallback(
    (id) => {
      const toastListItem = toastList.filter((e) => e.id !== id);
      setList(toastListItem);
    },
    [toastList, setList]
  );

  useEffect(() => {
    const interval = setInterval(() => {
      if (toastList.length) {
        deleteToast(toastList[0].id);
      }
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, [toastList, deleteToast]);
  return (
    <div id={cx("toastId")}>
      {toastList.map((toast, i) => {
        return (
          <div key={i} className={cx("toast", `toast--${toast.state}`)}>
            <div className={cx("toast__icon")}>{toast.icon}</div>
            <div className={cx("toast__body")}>
              <h3 className="toast__title">{toast.title}</h3>
              <p className="toast__msg">{toast.des}</p>
            </div>
            <div
              onClick={() => deleteToast(toast.id)}
              className={cx("toast__close")}
            >
              <FontAwesomeIcon icon={faTimes} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Toast;
