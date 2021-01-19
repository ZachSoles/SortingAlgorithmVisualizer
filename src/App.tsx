import React, { useState } from 'react';
import logo from './logo.svg';
// import { bubbleSortTemp } from './SortingVisualizer/SortingVisualizer.tsx';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Button, ButtonGroup, Navbar, ToggleButton, Nav } from 'react-bootstrap';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';

var arr = []

// function printSortedArray(){
//   var arr: number[] = []
//   arr = generateArr(arr, 10)
//   // var arr = [0,1,2,4,6,3,7,8,9]
//   arr = bubbleSort(arr)
//   for(var i = 0; i < arr.length; i++){
//     console.log(i +": " +arr[i])
//   }
// }

function App() {

  const radios = [
    { name: 'Bubble Sort', value: '1' },
    { name: 'Insertion Sort', value: '2' },
    { name: 'Selection Sort', value: '3' },
    { name: 'Merge Sort', value: '4' },
    { name: 'Heap Sort', value: '5' },
    { name: 'Quick Sort', value: '6' },
  ];
  const [radioValue, setRadioValue] = useState('1');
  var sort = <SortingVisualizer />;
  return (
    <div>
      {/* <Navbar bg="dark" variant="dark" >
        <Navbar.Brand href="">Sorting Algo Visualizer</Navbar.Brand>
        <ButtonGroup toggle>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              type="radio"
              variant="secondary"
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <Button variant="outline-light" className="mr-2" onClick = {
              () => {
                console.log("New array being generated")
              }
            }>New Array</Button>

            <Button variant="outline-light" onClick = {
              () => {
                if (radioValue === '1') {
                  console.log('Bubble Sort')
                } else if (radioValue === '2') {
                  console.log('Insertion Sort')
                } else if (radioValue === '3') {
                  console.log('Selection Sort')
                } else if (radioValue === '4') {
                  console.log('Merge Sort')
                } else if (radioValue === '5') {
                  console.log('Heap Sort')
                } else if (radioValue === '6') {
                  console.log('Quick Sort')
                }
              }
            }>Sort</Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar> */}
      <SortingVisualizer/>
      </div>
  );
}

export default App;
