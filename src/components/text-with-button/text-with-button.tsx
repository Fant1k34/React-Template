import React from 'react'
import styles from './index.module.css'

export const TextWithButton = () => {
    return (
        <div className={styles.mainStyle}>
            <div>Тут текст</div>
            <button
                onClick={() => console.log('Пример реакт приложения с нодой')}>
                А вот тут кнопка
            </button>
        </div>
    )
}
