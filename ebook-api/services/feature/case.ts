const camelCase = (feature:string)=>{
     const featureSplit = feature.split("-")
     const featureArray = featureSplit.map((item)=>{
     const firstLetter =  item[0].toUpperCase()
     const restLetter = item.slice(1)
     return (firstLetter+restLetter)
  })

  return featureArray.join("")
}
export default camelCase