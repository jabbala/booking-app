import express from 'express';
import { countByCity, countByType, createHotel, deleteHotel, getHotel, getHotelRooms, getHotels, updateHotel } from '../controllers/hotel.js';
import { verifyAdmin } from '../utils/VerifyToken.js';

const router = express.Router();


router.post('/', verifyAdmin, createHotel)

router.put('/:id', verifyAdmin, updateHotel);

router.delete('/:id', verifyAdmin, deleteHotel);

router.get('/:id', getHotel);

router.get('/', getHotels);

router.get("/countByCity", countByCity);
router.get("/countByType", countByType);
router.get("/getHotelRooms", getHotelRooms);

export default router;