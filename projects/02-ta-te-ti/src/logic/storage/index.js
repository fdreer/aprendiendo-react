export const saveGameToStorage = ({newBoard, newTurn}) => {
  localStorage.setItem('board', JSON.stringify(newBoard));
  localStorage.setItem('turn', JSON.stringify(newTurn));
};

export const resetGameStorage = () => {
  localStorage.removeItem('board');
  localStorage.removeItem('turn');
};
