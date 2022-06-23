const express = require("express");
const dbPainting = require("./routes/card.route");
const corsMiddleware = require("./middleware/cors.middleware");

const app = express();
const PORT = 3001;

app.use(express.json());
app.use(corsMiddleware);
app.use("/api/dbCard", dbPainting);

app.listen(PORT, ()=>{
            console.log(`Server Start on port - ${PORT}`);
        });


