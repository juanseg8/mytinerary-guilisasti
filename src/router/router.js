const express = require("express")
const router = express.Router()
const { getCities, getCitie, addCitie, deleteCitie, updateNameCitie, updateItineraryCitie } = require("../controllers/citiesController")
const { getClient, getClients, addClient, deleteClient, updateNameClient } = require("../controllers/clientesController")
const { verifyDataClient } = require("../middlewares/verifications")
const { addAccount } = require("../controllers/accountsController")
const { addItinerary, getItineraries,  updateCitieItinerary, getItinerary, deletaItinerary } = require("../controllers/itineraryController")

router.get("/clients", getClients)
router.get("/client/:id", getClient)
router.post("/clients", verifyDataClient, addClient)
router.delete("/clients", deleteClient)
router.put("/clients", updateNameClient)

router.get("/cities", getCities)
router.get("/citie/id", getCitie)
router.post("/cities", addCitie)
router.delete("/cities", deleteCitie)
router.put("/cities", updateItineraryCitie)

router.post("/accounts", addAccount)

router.get("/itineraries", getItineraries)
router.get("/itinerary/id", getItinerary)
router.post("/itinerary", addItinerary)
router.put("/itinerary", updateCitieItinerary)
router.delete("/itinerary", deletaItinerary)

module.exports = router