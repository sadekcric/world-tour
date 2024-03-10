import './Country.css'

const Country = ({country,index}) => {

  // console.log(index,country);
  
  const {name, flags}=country
  

  return (
    <div className='card'>
      <h2>({index}) name: {name.common}</h2>
      <img src={flags.png} alt="" />
    </div>
  );
};

export default Country;