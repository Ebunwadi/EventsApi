const express = require("express");
const router = express.Router();

const {
  createEvent,
  getAllEvents,
  purchaseTicket,
  getAvailableEvents,
  getEvent,
  getMyEvent,
  updateEvent,
  DeleteAuthUserEvent
} = require("../controllers/event");
const { auth } = require("../middlewares/jwtAuth");

router.get("/available", getAvailableEvents);
router.post("/", auth, createEvent);
router.get("/", getAllEvents);
router.put("/:id", auth, updateEvent);
router.get("/:id", getEvent);
router.get("/purchase/:id", auth, purchaseTicket);
router.get("/myevent/:id", auth, getMyEvent);
router.delete('/delete/:eventId', auth, DeleteAuthUserEvent)
module.exports = router;
