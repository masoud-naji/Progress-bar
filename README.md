# ProgressBar chart

ProgressBar Chart a React library for Easy creating ProgressBar for showing your data such as skills.

  [![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
  

## Installation

Use the package manager [npm](https://www.npmjs.com/) to install ProgressBar.

```bash
npm i progressbar-chart
```



## Usage

```React
# import 
import { ProgressBar } from "progressbar-chart";
```
```React
# return
     <ProgressBar
      Data={SkillsArray}
      DataName="skillName"
      DataPercentage="skillPercentage"
      height="0.8rem"
      borderRadius="0.8rem"
      background="linear-gradient(to left,rgba(54, 162, 235, 1),rgba(54, 162, 235, 0.2))"
      boxShadow=" 0 3px 3px -5px rgba(54, 162, 235, 0.8),0 2px 5px rgba(54, 162, 235, 0.5)"
      color="rgb(0, 0, 0)"
    />
```
---

![alt text](https://dub01pap003files.storage.live.com/y4mTdq5Vfzmp3YRDGSFWRf-sihLag3dhvtOaSo6zAobYTokfO0ea33-5KzZVnKg0X5FpVvThgGSF6LWudl6NBa3zq-Aj5BJhgMEVOYp1g_NclKc3ZJTZiOwNzWYXxweAjBtACaaKW93fB8PifPtztrjOCXkih70UZmq92-MVY1myJ-nU06ZSEgsm-GGgRYuxQEr?width=734&height=335&cropmode=none)

---


|    Property             |     type      |  Default   |       Description       |
| ----------------------- |:-------------:|:----------:|:-----------------------:|
| Data                    | json data     |MockDocument|    Source File json     |
| DataPercentage          |   data        |prop name   |key colum  (number)      |
| DataName                |   label       |prop name   |   key colum (Name)      |
| height                  | legend show   |     1rem   |  height                 |
| width                   | legend show   |     1rem   |  width                  |
| borderRadius            | CSS           |     0.5rem |only Number no px or rem |
| background              | legend Text   |linear-gradient(to left,rgba(54, 162, 235, 1),rgba(54, 162, 235, 0.2))|css color/array of colors|
| boxShadow               | CSS           |0 3px 3px -5px rgba(54, 162, 235, 0.8),0 2px 5px rgba(54, 162, 235, 0.5) |only Number no px or rem |
| color                   | CSS           | black      |only Number no px or rem |



***
## CodeSandBox Sample
[progressbar-chart]https://codesandbox.io/s/progressbar-chart-isf0s1


## Contributing
For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.


## License
[MIT](https://choosealicense.com/licenses/mit/)
[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
  