type FormatThaiBahtProps = {
    amount: number;
  };
  
  export const FormatThaiBaht = ({ amount }: FormatThaiBahtProps) => {
    return (
      <>
        {new Intl.NumberFormat('th-TH', {
          style: 'currency',
          currency: 'THB',
          minimumFractionDigits: 0,
          maximumFractionDigits: 0,
        }).format(amount)}
      </>
    );
  };
  