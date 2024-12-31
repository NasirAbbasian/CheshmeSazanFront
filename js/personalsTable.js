let table = new DataTable('#personals_table', {
    language: {
        processing: "در حال پردازش",
        search: "جستجو:",
        lengthMenu: "نمایش _MENU_ آیتم",
        info: "در حال نمایش آیتم _START_ تا _END_  از _TOTAL_ آیتم",
        infoEmpty: "هیچ آیتمی منطبق بر جست و جوی شما یافت نشد",
        infoFiltered: "«جست و جو شده در بین _MAX_ آیتم»",
        infoPostFix: "",
        loadingRecords: "در حال بارگذاری اطلاعات...",
        zeroRecords: "رکوردی یافت نشد",
        emptyTable: "محتوایی وجود ندارد",
        paginate: {
            first: "اول",
            previous: "قبلی",
            next: "بعدی",
            last: "آخرین"
        },
        aria: {
            sortAscending: ": activer pour trier la colonne par ordre croissant",
            sortDescending: ": activer pour trier la colonne par ordre décroissant"
        }
    }
});