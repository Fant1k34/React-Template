import React from 'react';

export const TextWithButton = () => {
    return (
        <div className="Example that it works">
            <div>Тут текст</div>
            <button onClick={() => console.log('Пример реакт приложения с нодой')}>А вот тут кнопка</button>
        </div>
    );
}
