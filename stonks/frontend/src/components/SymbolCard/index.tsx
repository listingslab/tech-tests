import { useCallback } from 'react';
import './symbolCard.css';
import { ReactComponent as CompanyIcon } from '@/assets/company.svg';

type SymbolCardProps = {
  id: string;
  onClick: (symbolId: string) => void;
  price: number;
};

const SymbolCard = ({ id, onClick, price }: SymbolCardProps) => {
  const handleOnClick = useCallback(() => {
    onClick(id);
  }, [id]);

  return (
    <div onClick={handleOnClick} className="symbolCard">
      <div>{id}</div>
      <div>Price:</div>
      <div>{price || 0} </div>
      <CompanyIcon /> <div>Name</div>
    </div>
  );
};
export default SymbolCard;
