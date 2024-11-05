//элемент кнопки переключения режимов

import React from 'react'; 
import { func, string } from 'prop-types';
import styled from 'styled-components'


//пример использования props внутри стилей. 
// ${({ theme }) => theme.background} — это template literal, 
//который позволяет динамически получать значение props theme.background 
//и использовать его в качестве значения свойства background.  
//!!!деструктуризация объекта theme внутри фигурных скобок.


const Button = styled.button`
  
  background: ${({ theme }) => theme.background};
  border: 2px solid ${({ theme }) => theme.toggleBorder};
  color: ${({ theme }) => theme.text};
  border-radius: 40px;
  cursor: pointer;
  font-size:0.8rem;
  padding: 0.6rem;

}
`;
//внутри компонента Toggle 2 пропса передаем:
//theme-возвращает текущую тему,
//ф-ция toggleTheme будет использоваться для переключения между темами
const Toggle = ({theme, toggleTheme }) => {
  return (
    // возвращаем компонент Button и назначаем функцию 
    // toggleTheme для события onClick.
    <Button onClick={toggleTheme} >
        Switch Theme
    </Button>
  );
};
//propTypes гарантирует, что props будут правильного типа
//prop theme будет строкой и является обязательным (.isRequired)
//prop toggleTheme будет функцией и является обязательным.
//Если передать в Toggle prop theme типа, отличного от строки, 
//или toggleTheme, не являющийся функцией, то  React выдаст предупреждение в консоли
Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}
export default Toggle;

