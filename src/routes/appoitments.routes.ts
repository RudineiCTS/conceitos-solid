import { Router } from 'express';
import { parseISO } from 'date-fns';

import AppointmentsRepository from '../repositories/AppointmentsRepository';
import CreateAppointmentService from '../services/CreateAppointementService';

const appointmentRouter = Router();
const appointmentsRepository = new AppointmentsRepository();

appointmentRouter.get('/', (request, response) => {
    const appointments = appointmentsRepository.all();
    return response.json(appointments);
});

appointmentRouter.post('/', (request, response) => {
    try {
        const { provider, date } = request.body;

        // e o parseISO esta convertendo para o tipo data
        const parsedDate = parseISO(date);
        const createAppointmentService = new CreateAppointmentService(
            appointmentsRepository,
        );
        const appointment = createAppointmentService.execute({
            date: parsedDate,
            provider,
        });
        return response.json(appointment);
    } catch (err) {
        return response.status(400).json({ error: err.message });
    }
});

export default appointmentRouter;
