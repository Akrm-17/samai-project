import { supabase } from './supabaseClient.js';

export async function searchSchool(statisticalNumber) {
    try {
        const { data, error } = await supabase
            .from('schools')
            .select('*')
            .eq('statistical_number', statisticalNumber)
            .single();

        if (error) {
            console.error('Error fetching school:', error);
            return { success: false, message: 'حدث خطأ أثناء البحث.' };
        }

        if (data) {
            return { success: true, message: 'تم العثور على الجهة', entity: data, display_name: data.name, type: data.education_type, targets: data.targets, governorate: data.governorate, gender: data.gender };
        } else {
            return { success: false, message: 'لم يتم العثور على جهة بهذا الرقم الإحصائي.' };
        }
    } catch (error) {
        console.error('An unexpected error occurred:', error);
        return { success: false, message: 'حدث خطأ غير متوقع.' };
    }
}

export async function registerCoordinator(formData) {
    try {
        const coordinatorData = {
            civil_record: formData.get('civil_record'),
            full_name: formData.get('full_name'),
            phone: formData.get('phone'),
            coordinator_type: formData.get('coordinator_type'),
            entity_name: formData.get('entity_name'),
            entity_type: formData.get('entity_type'),
            entity_governorate: formData.get('entity_governorate'),
            entity_gender: formData.get('entity_gender'),
            entity_targets: JSON.parse(formData.get('entity_targets') || '{}'),
        };

        const { data, error } = await supabase
            .from('coordinators')
            .insert([coordinatorData]);

        if (error) {
            console.error('Error registering coordinator:', error);
            if (error.code === '23505') { // Unique violation
                return { success: false, message: 'السجل المدني مسجل سابقاً في النظام.' };
            }
            return { success: false, message: 'حدث خطأ أثناء التسجيل.' };
        }

        return { success: true, title: 'نجح التسجيل!', message: 'تم تسجيل المنسق بنجاح.', redirect_url: '/' };
    } catch (error) {
        console.error('An unexpected error occurred:', error);
        return { success: false, message: 'حدث خطأ غير متوقع.' };
    }
}

export async function getAchievements() {
    try {
        const { data, error } = await supabase
            .from('achievements')
            .select('*');

        if (error) {
            console.error('Error fetching achievements:', error);
            return [];
        }

        return data;
    } catch (error) {
        console.error('An unexpected error occurred:', error);
        return [];
    }
}

export async function getSchools() {
    try {
        const { data, error } = await supabase
            .from('schools')
            .select('*');

        if (error) {
            console.error('Error fetching schools:', error);
            return [];
        }

        return data;
    } catch (error) {
        console.error('An unexpected error occurred:', error);
        return [];
    }
}


