import { render } from '@testing-library/react';
import React from 'react';
import { Button, ButtonGroup, Navbar, ToggleButton } from 'react-bootstrap';
import { bubbleSort, getBubbleSortAnimations, getInsertionSortAnimations, getSelectionSortAnimations, insertionSort, selectionSort,getMergeSortAnimations, getHeapSortAnimations, getQuickSortAnimations, mergeSort, quickSort, heapSort } from '../algo';
import './SortingVisualizer.css';
import Slider from 'react-rangeslider';

interface state {
  arr: number[]
  selectedSort: number
}

// Change this value for the speed of the animations.
const ANIMATION_SPEED_MS = 1;

// Change this value for the number of bars (value) in the array.
var NUMBER_OF_ARRAY_BARS = 300;

// This is the main color of the array bars.
const PRIMARY_COLOR = 'turquoise';

// This is the color of array bars that are being compared throughout the animations.
const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component <{}, state> {
  constructor(props: any) {
    super(props);

    this.state = {
      arr: [],
      selectedSort: 1
    };
  }

  componentDidMount() {
    this.generateArr()
  }

  generateArr(){
    const arr = []
    for(var i = 0; i < NUMBER_OF_ARRAY_BARS; i ++) {
        arr.push(getRandomInt(5, 600))
    }
    this.setState({arr})
  }

  testSortingAlgos(){
    for(var i = 0; i < 100; i++) {
      var tempArr = []
      for(var j = 0; j < 1000; j ++) {
        tempArr.push(getRandomInt(5, 600))
      }
      const bubbleTest = bubbleSort(tempArr, [])
      const insertionTest = insertionSort(tempArr, [])
      const selectionTest = selectionSort(tempArr, [])
      const mergeTest = mergeSort(tempArr, [])
      const heapTest = heapSort(tempArr, [])
      const quickTest = quickSort(tempArr, [])
      const tsSort = tempArr.sort()
      if(this.arraysEqual(tsSort, insertionTest) && this.arraysEqual(tsSort, bubbleTest) && this.arraysEqual(tsSort, selectionTest) && this.arraysEqual(tsSort, mergeTest) && this.arraysEqual(tsSort, heapTest)  && this.arraysEqual(tsSort, quickTest)) {
        console.log("All algorithms are working")
      } else {
        console.log("Something went wrong :(")
      }
    }
    console.log("Done Testing")
  }

  print(arr: Number[]){
    var str =""
    for(var i = 0; i < arr.length; i++){
      str += ", " + arr[i]
    }
    console.log(str)
  }

  arraysEqual(a: number[], b: number[]) {
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;
    for (var i = 0; i < a.length; ++i) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }

  bubbleSort() {
    var animations = getBubbleSortAnimations(this.state.arr)
    for (let i = 0; i < animations.length; i++) {
      var arrayBars = document.getElementsByClassName('array-bar');
      // const isColorChange = i % 3 !== 2;
      // if (isColorChange) {
      //   const [barOneIdx, barTwoIdx] = animations[i];
      //   var barOneStyle = arrayBars[barOneIdx] as HTMLElement;
      //   var barTwoStyle = arrayBars[barTwoIdx] as HTMLElement;
      //   const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
      //   setTimeout(() => {
      //     barOneStyle.style.backgroundColor = color;
      //     barTwoStyle.style.backgroundColor = color;
      //   }, i * ANIMATION_SPEED_MS);
      // } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          var barOneStyle = arrayBars[barOneIdx] as HTMLElement;
          barOneStyle.style.height = `${newHeight}px`;
        }, i * ANIMATION_SPEED_MS);
      // }
    }
    console.log("Done Sorting")
  }

  insertionSort() {
    var animations = getInsertionSortAnimations(this.state.arr)
    for (let i = 0; i < animations.length; i++) {
      var arrayBars = document.getElementsByClassName('array-bar');
      setTimeout(() => {
        const [barOneIdx, newHeight] = animations[i];
        var barOneStyle = arrayBars[barOneIdx] as HTMLElement;
        barOneStyle.style.height = `${newHeight}px`;
      }, i * ANIMATION_SPEED_MS);
    }
    console.log("Done Sorting")
  }

  selectionSort() {
    var animations = getSelectionSortAnimations(this.state.arr)
    for (let i = 0; i < animations.length; i++) {
      var arrayBars = document.getElementsByClassName('array-bar');
      setTimeout(() => {
        const [barOneIdx, newHeight] = animations[i];
        var barOneStyle = arrayBars[barOneIdx] as HTMLElement;
        barOneStyle.style.height = `${newHeight}px`;
      }, i * ANIMATION_SPEED_MS);
    }
    console.log("Done Sorting")
  }

  mergeSort() {
    var animations = getMergeSortAnimations(this.state.arr)
    for (let i = 0; i < animations.length; i++) {
      var arrayBars = document.getElementsByClassName('array-bar');
      setTimeout(() => {
        const [barOneIdx, newHeight] = animations[i];
        var barOneStyle = arrayBars[barOneIdx] as HTMLElement;
        barOneStyle.style.height = `${newHeight}px`;
      }, i * ANIMATION_SPEED_MS);
    }
    console.log("Done Sorting")
  }

  heapSort() {
    var animations = getHeapSortAnimations(this.state.arr)
    for (let i = 0; i < animations.length; i++) {
      var arrayBars = document.getElementsByClassName('array-bar');
      setTimeout(() => {
        const [barOneIdx, newHeight] = animations[i];
        var barOneStyle = arrayBars[barOneIdx] as HTMLElement;
        barOneStyle.style.height = `${newHeight}px`;
      }, i * ANIMATION_SPEED_MS);
    }
    console.log("Done Sorting")
  }

  quickSort() {
    var animations = getQuickSortAnimations(this.state.arr)
    for (let i = 0; i < animations.length; i++) {
      var arrayBars = document.getElementsByClassName('array-bar');
      setTimeout(() => {
        const [barOneIdx, newHeight] = animations[i];
        var barOneStyle = arrayBars[barOneIdx] as HTMLElement;
        barOneStyle.style.height = `${newHeight}px`;
      }, i * ANIMATION_SPEED_MS);
    }
    console.log("Done Sorting")
  }

  render() {
    const {arr} = this.state;
    var checked = 1

    return (
      <div>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="">Sorting Algo Visualizer</Navbar.Brand>
          <ButtonGroup toggle className="mr-auto">
            <ToggleButton onClick={() => {this.setState({selectedSort: 1})}} type="radio" checked={this.state.selectedSort === 1} variant="outline-light" value={1}>
              Bubble Sort
            </ToggleButton>
            <ToggleButton onClick={() => {this.setState({selectedSort: 2})}} type="radio" checked={this.state.selectedSort === 2} variant="outline-light" value={2}>
              Selection Sort
            </ToggleButton>
            <ToggleButton onClick={() => {this.setState({selectedSort: 3})}} type="radio" checked={this.state.selectedSort === 3} variant="outline-light" value={3}>
              Insertion Sort
            </ToggleButton>
            <ToggleButton onClick={() => {this.setState({selectedSort: 4})}} type="radio" checked={this.state.selectedSort === 4} variant="outline-light" value={4}>
              Merge Sort
            </ToggleButton>
            <ToggleButton onClick={() => {this.setState({selectedSort: 5})}} type="radio" checked={this.state.selectedSort === 5} variant="outline-light" value={5}>
              Heap Sort
            </ToggleButton>
            <ToggleButton onClick={() => {this.setState({selectedSort: 6})}} type="radio" checked={this.state.selectedSort === 6} variant="outline-light" value={6}>
              Quick Sort
            </ToggleButton>
          </ButtonGroup>
          <Button variant="outline-light" className="mr-2" onClick = {() => this.generateArr()}>New Array</Button>
          <Button variant="outline-light" onClick = {() => {
            if (this.state.selectedSort === 1) {
              this.bubbleSort()
            } else if (this.state.selectedSort === 2) {
              this.selectionSort()
            } else if (this.state.selectedSort === 3) {
              this.insertionSort()
            } else if (this.state.selectedSort === 4) {
              this.mergeSort()
            } else if (this.state.selectedSort === 5) {
              this.heapSort()
            } else if (this.state.selectedSort === 6) {
              this.quickSort()
            }
          }}>Sort</Button>
        </Navbar>
        <div className="array-container">
          {
            arr.map((value, index) => (
                <div
                  className="array-bar"
                  key={index}
                  style={{height: `${value}px`}}
                ></div>
            ))
          }
        </div>
      </div>
    )
  }
}

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}