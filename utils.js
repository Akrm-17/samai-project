import supabase from './supabaseClient.js';

export async function searchSchool(statisticalNumber) {
    console.log(`Searching for school with statistical number: ${statisticalNumber}`);

    try {
        const { data, error } = await supabase
            .from('schools')
            .select('*')
            .eq('statistical_number', statisticalNumber)
            .single();

        if (error && error.code !== 'PGRST116') { // PGRST116 means no rows found
            throw error;
        }

        if (data) {
            return { success: true, message: 'تم العثور على الجهة', entity: data, display_name: data.name, type: 'institution', targets: {}, governorate: data.governorate, gender: data.gender };
        } else {
            return { success: false, message: 'لم يتم العثور على جهة بهذا الرقم الإحصائي.' };
        }
    } catch (error) {
        console.error('Error searching school:', error.message);
        return { success: false, message: 'حدث خطأ أثناء البحث عن الجهة.' };
    }
}

export async function registerCoordinator(formData) {
    console.log("Registering coordinator with data:", Object.fromEntries(formData.entries()));

    try {
        const { data, error } = await supabase
            .from("coordinators")
            .insert([Object.fromEntries(formData.entries())]);

        if (error) {
            if (error.code === "23505") { // Unique violation code
                return { success: false, message: "السجل المدني مسجل سابقاً في النظام." };
            }
            throw error;
        }

        return { success: true, title: "نجح التسجيل!", message: "تم تسجيل المنسق بنجاح.", redirect_url: "/" };
    } catch (error) {
        console.error("Error registering coordinator:", error.message);
        return { success: false, message: "حدث خطأ أثناء تسجيل المنسق." };
    }
}

export async function getAchievements() {
    console.log('Fetching achievements');

    try {
        const { data, error } = await supabase
            .from('achievements')
            .select('*');

        if (error) {
            throw error;
        }

        return data;
    } catch (error) {
        console.error('Error fetching achievements:', error.message);
        return [];
    }
}

export async function getSchools() {
    console.log("Fetching schools");

    try {
        const { data, error } = await supabase
            .from("schools")
            .select("*");

        if (error) {
            throw error;
        }

        return data;
    } catch (error) {
        console.error("Error fetching schools:", error.message);
        return [];
    }
}

