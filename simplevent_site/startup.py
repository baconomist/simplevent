import os
import shutil

import CustomPDFLibServer.settings as settings


def on_startup():
    print("Running on_startup()...")
    # Clear pdf upload and processed dirs
    if os.path.exists(settings.PDF_PROC_UPLOAD_DIR):
        shutil.rmtree(settings.PDF_PROC_UPLOAD_DIR)
    if os.path.exists(settings.PDF_PROC_PROCESSED_DIR):
        shutil.rmtree(settings.PDF_PROC_PROCESSED_DIR)

