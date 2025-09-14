import { searchSchool } from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.getElementById('search-school-button');
    if (searchButton) {
        searchButton.addEventListener('click', async () => {
            const statisticalNumberInput = document.getElementById('statistical_number_input');
            if (statisticalNumberInput) {
                const statisticalNumber = statisticalNumberInput.value;
                const resultDiv = document.getElementById('school-search-result');
                if (resultDiv) {
                    const result = await searchSchool(statisticalNumber);
                    if (result.success) {
                        resultDiv.innerHTML = `<div class="alert alert-success">${result.message}: ${result.display_name}</div>`;
                    } else {
                        resultDiv.innerHTML = `<div class="alert alert-danger">${result.message}</div>`;
                    }
                }
            }
        });
    }
});


