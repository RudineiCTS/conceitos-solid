import { startOfHour } from 'date-fns';

import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

interface RequestDTO {
    provider: string;
    date: Date;
}

class CreateAppointmentService {
    private appointmentsRepository: AppointmentsRepository;

    constructor(appointmentsRepository: AppointmentsRepository) {
        this.appointmentsRepository = appointmentsRepository;
    }

    public execute({ date, provider }: RequestDTO): Appointment {
        const appointmentDate = startOfHour(date);
        // startOfHour esta zerando os minutos e segundos
        const findAppointmenstInSameDate = this.appointmentsRepository.findByDate(
            appointmentDate,
        );
        if (findAppointmenstInSameDate) {
            throw Error('This appointment is already booked ');
        }

        const appointment = this.appointmentsRepository.create({
            provider,
            date: appointmentDate,
        });

        return appointment;
    }
}
export default CreateAppointmentService;
