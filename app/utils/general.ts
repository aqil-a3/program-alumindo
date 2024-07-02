export function formatDate(isoDateString: string): string {
    const currentDate = new Date(isoDateString);
    const futureDate = new Date(currentDate.setDate(currentDate.getDate() + 30));
    
    // Array bulan sesuai dengan format yang diinginkan
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    
    // Mendapatkan tanggal, bulan, dan tahun dari objek Date
    const day = futureDate.getDate();
    const month = months[futureDate.getMonth()];
    const year = futureDate.getFullYear();
    
    // Menghasilkan string dengan format "DD-Mmm-YYYY"
    const formattedDate = `${day}-${month}-${year}`;
    
    return formattedDate;
}
