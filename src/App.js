import './App.css';
import 'antd/dist/antd.css';
import { Select } from 'antd';
import {useEffect, useState} from "react";

const { Option } = Select;





function App() {

    const [level,setLevel] = useState('easy');

    function handleChange(value) {
        setLevel(value);
    }

    const Tile = ({color}) => {
        return (
            <div style={{
                width: 20,
                height: 20,
                backgroundColor: color,
                float: 'left',
                border: '1px solid gray'
            }}></div>
        )
    }

    //column
    const TileLine = () => {

        const [boxList, setBoxList] = useState([]);

        useEffect(()=>{

            let boxlist = []
            let column = 10;
            switch (level) {
                case 'easy' :
                    column = 10;
                    break;
                case 'normal' :
                     column = 20;
                    break;
                case 'hard' :
                     column = 30;
                     break;
            }

            for(var i = 0; i < column; i++){
               boxlist.push(<Tile color={i === 12 ? 'red' : 'black'}/>)
            }
            setBoxList(boxlist);

        },[level])

        return (
            <div style={{height: 22}}>
                {boxList}
            </div>
        )
    }
    return (
        <>
            <Select
              value={level}
                style={{ width: 120 }}
                onChange={handleChange}
            >
                <Option value="easy">easy</Option>
                <Option value="normal">normal</Option>
                <Option value="hard">hard</Option>
            </Select>


            {/*row*/}
            <TileLine/>
            <TileLine/>
            <TileLine/>
            <TileLine/>
            <TileLine/>

        </>
    )
}

export default App;
