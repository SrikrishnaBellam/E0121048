const { log } = require("console");
const { get } = require("http");

const fetch_numbers = async (id) => {
    const token_type = "Bearer";
    const Auth_key ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzIwMDg1NTc0LCJpYXQiOjE3MjAwODUyNzQsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjFkZGY2ZmQ3LTcwYzItNDkxMS05Mzk4LWU0YWZjYmMzYzk0OCIsInN1YiI6ImJlbGxhbXNyaWtyaXNobmFAZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiU3JpIFJhbWFjaGFuZHJhIEVuZ2luZWVyaW5nIEFuZCBUZWNobm9sb2d5IiwiY2xpZW50SUQiOiIxZGRmNmZkNy03MGMyLTQ5MTEtOTM5OC1lNGFmY2JjM2M5NDgiLCJjbGllbnRTZWNyZXQiOiJNeXdmWnZzTkdWS25qSm1GIiwib3duZXJOYW1lIjoiU3JpIEtyaXNobmEgQmVsbGFtIiwib3duZXJFbWFpbCI6ImJlbGxhbXNyaWtyaXNobmFAZ21haWwuY29tIiwicm9sbE5vIjoiRTAxMjEwNDgifQ.zcccWWHcmGcho9r2ao851Cxrzzg28YcnVZ9Pq4UbDVM"

    try{
        const response = await fetch(`http://20.244.56.144/test/${id}`,{
            method:'GET',
            headers: {
                'Authorization' : `${token_type} ${Auth_key}`,
                'Content-Type' : 'application/json'
            }
        });
        if (!response.ok){
            throw new Error('Failed to fetch');
        }
        const numbers = await response.json();
        return numbers 
    }catch (err){
        console.error('Error: ', err)
    }
}

const getAvg = async (numbers) =>{
    numbers = checkLength(numbers)
    let sm = 0
    for (let i = 0; i < numbers.length; i++) {
        sm += numbers[i]
    }
    let avg = sm/avg.length
}

const reverseList = async (numbers) => {
    let l = 0;
    let r = numbers.length - 1

    while (l<r){
        temp = numbers[l]
        numbers[l] = numbers[r]
        numbers[r] = temp
        log(numbers[l], numbers[r])
        l = l + 1
        r = r - 1
    }
    log(numbers);
    return numbers
}

function arrayLength(arr) {
    let count = 0;
    for (const element of arr) {
      count++;
    }
 
    return count; 
 }

// console.log(reverseList([1,2,3,4,5]))
const checkLength = async (numbers) => {
    let count = arrayLength(numbers);
    if (count > 10) {
        numbers = await reverseList(numbers);
        numbers = numbers.slice(0, 10); 
        numbers = await reverseList(numbers);
        return numbers;
    } else {
        return numbers;
    }
}

// log(checkLength([1,2,3,4,5,6,7,8,9,10,11]))

// const average = async (numbers) =>{
//     let window_size = 10;
    
// }

module.exports = {fetch_numbers, getAvg};