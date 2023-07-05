## Pages and Layout 
- we can make new pages by making new folders of the particular page in "/src" folder and the make a file of name page.js in the particular folder and the you can render that page just by adding the route to the localhost url
- we can create a common layout for all the pages present in the folder
- as by default all the components render on the server side but you can make them render on by using simple writing "use client" on the top
- we can use Client side rendering when we needed to have more of the user interaction

## Data fetching in nextJs
- we can fetch data both in the server side and in the client side 
- In client side we can use fetch in Useeffect or fetching libraries react query,SWR
- In Server side we can fetch data by changing component to async and directly fetch the data 
- data never changes can use 
    - Static data fetching 'force-cache'
- data changes but no to often then revalidate it in particular amount of time
    - Revalidating data 'revalidate : 10'
- data chnages all the time use dynamic fetching
    -  dynamci fetching 'no-store'