import React from 'react';

import Button from './Button';

function ModalPopUp({ active, type, setDeactive }) {
   return (
      <div className={active ? 'modal modal--active' : 'modal'}>
         {
            (type === 'buy')
               ? <div className='modal-content'>
                  <h2>Спасибо за заказ!</h2>
                  <Button onClick={() => setDeactive('buy')}>Закрыть</Button>
               </div>
               : (type === 'clear') ? <div className='modal-content'>
                  <h2>Вы уверены, что хотите очистить корзину?</h2>
                  <div className='modal-buttons'>
                     <Button onClick={() => setDeactive('clear')}>Да</Button>
                     <Button className="button button--black"
                        onClick={setDeactive}>Отмена</Button>
                  </div>
               </div>
                  : <div className='modal-content'>
                     <h2>Вы уверены, что хотите удалить эту позицию ?</h2>
                     <div className='modal-buttons'>
                        <Button onClick={() => setDeactive('remove')}>Да</Button>
                        <Button className="button button--black"
                           onClick={setDeactive}>Отмена</Button>
                     </div>
                  </div>
         }

      </div>
   );
};

export default ModalPopUp;