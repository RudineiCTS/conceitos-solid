import { isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

interface IAppointmentDTO {
    provider: string;
    date: Date;
}

class AppointmentsRepository {
    private appointments: Appointment[];

    constructor() {
        this.appointments = [];
    }

    public all(): Appointment[] {
        return this.appointments;
    }

    public findByDate(date: Date): Appointment | null {
        const findAppointment = this.appointments.find(appointment =>
            isEqual(appointment.date, date),
        );
        // se  não houver um 'appointment' a função retornara null
        return findAppointment || null;
    }

    public create({ provider, date }: IAppointmentDTO): Appointment {
        const appointment = new Appointment({ provider, date });

        this.appointments.push(appointment);

        return appointment;
    }
}
export default AppointmentsRepository;
