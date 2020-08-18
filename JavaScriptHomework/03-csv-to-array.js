/*
Write a JS program that extracts the username and email from a CSV
-----------------------------------------------------------
Expected Output - An array of objects
-----------------------------------------------------------
[
    { name: 'Torre', email: 'tbaddoe0@bloomberg.com' },
    { name: 'Deidre', email: 'dtousey1@lulu.com' },
    { name: 'Rhys', email: 'rnutman2@mail.ru' },
    { name: 'Engelbert', email: 'ebaythrop3@ox.ac.uk' },
    { name: 'Leticia', email: 'lkyberd4@topsy.com' },
    { name: 'Noe', email: 'nglanert5@disqus.com' },
    { name: 'Jo-ann', email: 'jracine6@whitehouse.gov' },
    { name: 'Mickie', email: 'mstell7@ning.com' },
    { name: 'Nicolas', email: 'nkither8@marriott.com' },
    { name: 'Gretel', email: 'gweddeburn9@seesaa.net' }
]
-----------------------------------------------------------
There should be no empty entries. The row from the csv containing the column headers should be ommited.
If a non string input is passed, throw an error
*/

const sampleInput = `
id,name,email
1,Torre,tbaddoe0@bloomberg.com
2,Deidre,dtousey1@lulu.com
3,Rhys,rnutman2@mail.ru
4,Engelbert,ebaythrop3@ox.ac.uk
5,Leticia,lkyberd4@topsy.com
6,Noe,nglanert5@disqus.com
7,Jo-ann,jracine6@whitehouse.gov
8,Mickie,mstell7@ning.com
9,Nicolas,nkither8@marriott.com
10,Gretel,gweddeburn9@seesaa.net
`;

function csvToArray(csv) {
  let input = csv.toString().split('\n').map(e => e.trim()).map(e => e.split(',').map(e => e.trim()));
  
  
  input = JSON.stringify(input);
  let objects = JSON.parse(input);
  
  let arr = objects.filter(x => x[0].toString() !== "" && x[0].toString() !== "id")
  let output = [];
  arr.forEach(element => {
    var obj = {name: element[1].toString(), email: element[2]}
    output.push(obj);
  });
  
  for(let i = 0; i < output.length; i++){
    if(i == output.length - 1){
      console.log("{ name: '%s', email: '%s' }", output[i].name.toString(), output[i].email.toString());
    }
    else{
      console.log("{ name: '%s', email: '%s' },", output[i].name.toString(), output[i].email.toString());
    }
  }

}

console.log(csvToArray(sampleInput));
