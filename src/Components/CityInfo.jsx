import './CityInfo.css'; 

    const citiesData = [
      { id: 1, name: 'Kyiv' },
      { id: 2, name: 'Kharkiv' },
      { id: 3, name: 'Odesa' },
      { id: 4, name: 'Lviv' },
      { id: 5, name: 'Dnipro' },
      { id: 6, name: 'Zaporizhzhia' },
      { id: 7, name: 'Ivano-Frankivsk' },
      { id: 8, name: 'Kropyvnytskyi' },
      { id: 9, name: 'Kherson' },
      { id: 10, name: 'Chernivtsi' },
      { id: 11, name: 'Cherkasy' },
      { id: 12, name: 'Chernihiv' },
    ]

function CityInfo(){

  return (
    <div>
      <h1>Regional Centers of Ukraine</h1>
      <ul>
      {citiesData.map(i=> 
        <li>[{i.id}]-{i.name}</li>
        )}
      </ul>
    </div>
  );
};

export default CityInfo;