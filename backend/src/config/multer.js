import multer from 'multer';
import path from 'path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);

    const dest = path.resolve(__dirname, '..', '..', 'tmp', 'uploads');
    const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'));
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname;

        cb(null, fileName);
    }
});
const multerConfig = multer({storage: storage})
export default multerConfig