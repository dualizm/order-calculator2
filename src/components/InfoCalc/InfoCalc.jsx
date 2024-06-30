import style from "./InfoCalc.module.css";

export const InfoCalc = () => {
  return (
    <div className={style.infocalc}>
      <p>Информация</p>
      <div className={style.inputs}>
        <input
          className={style.infocalcInput}
          type="text"
          placeholder="Скидка на заказ"
        />
        <input
          className={style.infocalcInput}
          type="text"
          placeholder="Цена доставки"
        />
        <input
          className={style.infocalcInput}
          type="text"
          placeholder="Сервисный сбор"
        />
      </div>
    </div>
  );
};
