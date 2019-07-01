import React from 'react';
import { PieChart, Pie, Sector, Cell, Legend } from 'recharts';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

import FontAwesome from 'react-fontawesome';




class Acidentes extends React.Component {
  render(){
    return( 

      <div className="row mb-5">
        <NumAcidentes/>
        <AreasAcidentes/>
        <QntdAcidentes/>
      </div>

      
    );

  };
}



class AreasAcidentes extends React.Component {
  render() {

    const data01 = [{name: 'Produção', value: 400}, {name: 'Infraestrutura', value: 300},{name: 'Logística', value: 300}, {name: 'Manutenção', value: 200}];
    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
    const RADIAN = Math.PI / 180;                    
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
      const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
      const x  = cx + radius * Math.cos(-midAngle * RADIAN);
      const y = cy  + radius * Math.sin(-midAngle * RADIAN);    
      return (
        <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
          {`${(percent * 100).toFixed(0)}%`}
        </text>
      );
    };

    return (  
      <div className="col-md-4">    
        <div className="panel">
          <div className="panel-heading bg-dark text-white ">
            <h6 className="text-left mb-0"><FontAwesome name="ambulance"/> Áreas com mais acidentes  </h6>
          </div>
          <div className="panel-body">
            <PieChart width={350} height={200}>
              <Pie isAnimationActive={true} data={data01} cx={95} cy={95} labelLine={false} label={renderCustomizedLabel} outerRadius={80} innerRadius={0} fill="#8884d8">
              {
                data01.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
              }
              </Pie>
              <Legend width={135} wrapperStyle={{ top: 30, left: 200, backgroundColor: '#f5f5f5', border: '1px solid #d5d5d5', borderRadius: 3, lineHeight: '30px' }} />
            </PieChart>
          </div>
        </div>
      </div>
    )
  }
};



class NumAcidentes extends React.Component {
  render() {

    const data = {
        total: "12",
        cAfastamento: 3,
        sAfastamento: 9,
        pAfastamento: 25,
      };
   
    return (      
      <div className="col-md-4">
        <div className="panel d-flex h-100 flex-column">
          <div className="panel-heading bg-dark  text-white ">
            <h6 className="text-left mb-0"><FontAwesome name="ambulance"/> Número de acidentes  </h6>
          </div>
          <div className="panel-body panel-body d-flex h-100 flex-column justify-content-around dozepx ">

          <div>
            TOTAL: 
            <div className="ze">
                {data.total}   
            </div>
          </div>
          
          <div className="d-flex">
            <div className="w-100">
              Com afastamento: 
              <div className="ze">
                {data.cAfastamento}
              </div>
            </div>
            <div className="w-100">
              Sem afastamento: 
              <div className="ze">
                {data.sAfastamento}
              </div>
            </div>
          </div>

          <div>
            % com afastamento: 
            <div className="ze">
                {data.pAfastamento} %
            </div>
          </div>
           
          </div>
        </div>
      </div>  
    )
  }
};



class QntdAcidentes extends React.Component {
  render() {

    const data = [
      {name: 'Jan', uv: 13},
      {name: 'Fev', uv: 11},
      {name: 'Mar', uv: 9},
      {name: 'Abr', uv: 7},
      {name: 'Mai', uv: 8},
      {name: 'Jun', uv: 5},
      {name: 'Jul', uv: 3}
      // {name: 'Abril', uv: 5, pv: 3908, amt: 2000}
    ];
   
    return (      
      <div className="col-md-4">
        <div className="panel">
          <div className="panel-heading bg-dark  text-white ">
            <h6 className="text-left mb-0"><FontAwesome name="ambulance"/> Gráfico de acidentes  </h6>
          </div>
          <div className="panel-body">
            <AreaChart width={350} height={200} data={data} margin={{top: 10, right: 30, left: 0, bottom: 0}}>
              <CartesianGrid strokeDasharray="3 3"/>
              <XAxis dataKey="name"/>
              <YAxis/>
              <Tooltip/>
              <Area type='monotone' dataKey='uv' stroke='#8884d8' fill='#8884d8' />
            </AreaChart>
          </div>
        </div>
      </div>
    )
  }
};

export default Acidentes;