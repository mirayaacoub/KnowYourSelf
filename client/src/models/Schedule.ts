interface Schedule {
    schedule_id: number;
    isBooked: number;
    date_time: string;
    therapist_id: number;
    patient_id: number | null;
  }