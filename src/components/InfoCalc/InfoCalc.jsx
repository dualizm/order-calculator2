import { InputGroup } from "@blueprintjs/core";
import style from "./InfoCalc.module.css";

export const InfoCalc = () => {
  return (
    <div className={style.infocalc}>
        <p>Информация</p>
        <div className={style.inputs}>
            <InputGroup
                leftIcon="info-sign"
                placeholder="Скидка на заказ"
                className={style.infocalcInput}
            />
            <InputGroup
                leftIcon="info-sign"
                placeholder="Цена доставки"
                className={style.infocalcInput}
            />
            <InputGroup
                leftIcon="info-sign"
                placeholder="Сервисный сбор"
                className={style.infocalcInput}
            />
        </div>
    </div>
  );
};
