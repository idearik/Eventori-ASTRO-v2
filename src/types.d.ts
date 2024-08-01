declare global {
    interface Event {
      name: string;
      date: string;
      endDate?: string;
      location: string;
      status: string;
      description: string;
      url: string;
    }
  }
  