import express from "express"
const router = express.Router()

router.post("/")
router.get("/")
router.put("/:requestedId")


export const adoptionRoutes = router; 
