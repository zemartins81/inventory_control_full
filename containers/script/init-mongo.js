    db.auth('jcmartins81', 'ze123456')

    db = db.getSiblingDB('inventoryControl')

    db.createUser({
        user: 'zemartins81',
        pwd: 'ze123456',
        roles: [
            {
                role: 'root',
                db: 'products',
            },
        ],
    });