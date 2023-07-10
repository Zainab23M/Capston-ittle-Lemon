export const fetchAPI = async (date) => {
    try {
      const response = await fetch(`/api/times?date=${date}`);
      if (response.ok) {
        const data = await response.json();
        return data;
      } else {
        throw new Error('Failed to fetch available times.');
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
  
  export const submitAPI = async (formData) => {
    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        const data = await response.json();
        return data.success;
      } else {
        throw new Error('Failed to submit the form data.');
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  };
