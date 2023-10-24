




3. In your React component file, import the necessary dependencies and the Apollo client instance:
   ```typescript
   import { useQuery, gql } from '@apollo/client';
   import client from './apolloClient';
   ```

4. Define your GraphQL query. In this case, you want to find data for a specific hash. Replace `<HASH>` with the actual hash you want to query. Add the following code to your component file:
   ```typescript
   const GET_HASH_DATA = gql`
     query HashData($hash: String!) {
       bitcoin {
         transactions(options: { desc: "block.height", limit: 10 }, hash: { is: $hash }) {
           hash
           block {
             height
             timestamp {
               time(format: "%Y-%m-%d %H:%M:%S")
             }
           }
           inputs {
             address
             value
           }
           outputs {
             address
             value
           }
         }
       }
     }
   `;
   ```

5. Define a function to execute the query and retrieve the data. Add the following code to your component:
   ```typescript
   function getHashData(hash: string) {
     return client.query({
       query: GET_HASH_DATA,
       variables: { hash },
     });
   }
   ```

6. Use the `useQuery` hook to execute the query and retrieve the data in your component's rendering logic:
   ```typescript
   function YourComponent() {
     const { loading, error, data } = useQuery(GET_HASH_DATA, {
       variables: { hash: '<YOUR_HASH>' },
     });

     if (loading) return <div>Loading...</div>;
     if (error) return <div>Error: {error.message}</div>;

     // Access the data from the query response
     const hashData = data?.bitcoin.transactions[0];

     // Render the retrieved data
     return (
       <div>
         <h1>Hash Data</h1>
         <p>Hash: {hashData?.hash}</p>
         <p>Block Height: {hashData?.block?.height}</p>
         <p>Block Timestamp: {hashData?.block?.timestamp?.time}</p>
         {/* Render other relevant data */}
       </div>
     );
   }
   ```

7. Make sure to replace `<YOUR_HASH>` with the actual hash value you want to query.

That's it! With these steps, you can use Apollo in React with TypeScript to find data for a hash using Bitquery's GraphQL API.