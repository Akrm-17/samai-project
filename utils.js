import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const SUPABASE_URL = 'https://iuadrfljlspngmplaeyf.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Iml1YWRyZmxqbHNwbmdtcGxhZXlmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTc4NjAyNTgsImV4cCI6MjA3MzQzNjI1OH0.uRSbrIMpzkQQCuwqU4zk6Tb6vXgfehkVT34PBFQtlYU';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export async function searchSchool(statisticalNumber) {
    // This is a dummy function for now. Replace with actual Supabase call.
    console.log(`Searching for school with statistical number: ${statisticalNumber}`);
    
    // Simulate a delay
    await new Promise(resolve => setTimeout(resolve, 500));

    const dummySchools = [
        { id: 1, name: 'الابتدائية الأولى بأبي عجرم', statistical_number: '77638', governorate: 'ضباء', gender: 'بنات', type: 'institution', targets: { administrators: 5, teachers: 20, students: 200 } },
        { id: 2, name: 'الابتدائية الأولى بالوجه', statistical_number: '77548', governorate: 'الوجه', gender: 'بنات', type: 'institution', targets: { administrators: 4, teachers: 18, students: 180 } },
        { id: 3, name: 'الابتدائية الثالثة بتبوك', statistical_number: '77513', governorate: 'تبوك', gender: 'بنات', type: 'institution', targets: { administrators: 6, teachers: 25, students: 250 } },
        { id: 4, name: 'الابتدائية الثانية بحقل', statistical_number: '77546', governorate: 'حقل', gender: 'بنات', type: 'institution', targets: { administrators: 3, teachers: 15, students: 150 } },
    ];

    const foundSchool = dummySchools.find(s => s.statistical_number === statisticalNumber);

    if (foundSchool) {
        return { success: true, message: 'تم العثور على الجهة', entity: foundSchool, display_name: foundSchool.name, type: foundSchool.type, targets: foundSchool.targets, governorate: foundSchool.governorate, gender: foundSchool.gender };
    } else {
        return { success: false, message: 'لم يتم العثور على جهة بهذا الرقم الإحصائي.' };
    }
}

export async function registerCoordinator(formData) {
    // This is a dummy function for now. Replace with actual Supabase call.
    console.log('Registering coordinator with data:', Object.fromEntries(formData.entries()));

    // Simulate a delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    const civilRecord = formData.get('civil_record');

    // Simulate duplicate civil record for testing
    if (civilRecord === '1234567890') {
        return { success: false, message: 'السجل المدني مسجل سابقاً في النظام.' };
    }

    return { success: true, title: 'نجح التسجيل!', message: 'تم تسجيل المنسق بنجاح.', redirect_url: '/' };
}

export async function getAchievements() {
    // This is a dummy function for now. Replace with actual Supabase call.
    console.log('Fetching achievements');

    // Simulate a delay
    await new Promise(resolve => setTimeout(resolve, 700));

    return [
        { id: 1, name: 'وسام التميز', description: 'للمنسقين الأكثر نشاطاً', date: '2025-08-01', level: 'gold' },
        { id: 2, name: 'وسام الإبداع', description: 'للمنسقين أصحاب الأفكار الجديدة', date: '2025-07-15', level: 'silver' },
        { id: 3, name: 'وسام المشاركة', description: 'للمنسقين المشاركين بفعالية', date: '2025-06-20', level: 'bronze' },
    ];
}

export async function getSchools() {
    // This is a dummy function for now. Replace with actual Supabase call.
    console.log('Fetching schools');

    // Simulate a delay
    await new Promise(resolve => setTimeout(resolve, 500));

    const schools = [
        { id: 1, name: 'الابتدائية الأولى بأبي عجرم', statistical_number: '77638', governorate: 'ضباء', gender: 'بنات' },
        { id: 2, name: 'الابتدائية الأولى بالوجه', statistical_number: '77548', governorate: 'الوجه', gender: 'بنات' },
        { id: 3, name: 'الابتدائية الثالثة بتبوك', statistical_number: '77513', governorate: 'تبوك', gender: 'بنات' },
        { id: 4, name: 'الابتدائية الثانية بحقل', statistical_number: '77546', governorate: 'حقل', gender: 'بنات' },
        { id: 5, name: 'الابتدائية الأولى بضباء', statistical_number: '77575', governorate: 'ضباء', gender: 'بنات' },
        { id: 6, name: 'الابتدائية الأولى بأملج', statistical_number: '77567', governorate: 'أملج', gender: 'بنات' },
        { id: 7, name: 'الابتدائية الأولى بأميتب', statistical_number: '77561', governorate: 'أميتب', gender: 'بنات' },
        { id: 8, name: 'الابتدائية الأولى بالبدع', statistical_number: '77556', governorate: 'البدع', gender: 'بنات' },
        { id: 9, name: 'الابتدائية الأولى بالبئر', statistical_number: '77535', governorate: 'البئر', gender: 'بنات' },
        { id: 10, name: 'الابتدائية الأولى بالرسو', statistical_number: '77629', governorate: 'الرسو', gender: 'بنات' },
    ];
    return schools;
}

