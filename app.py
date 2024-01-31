import os
from webui import webui
from pydub import AudioSegment
import tkinter as tk
from tkinter import filedialog

if os.path.isfile('./ffmpeg.exe') and os.path.isfile('./ffprobe.exe'):
	print('bundled ffmpeg found...')
else:
	print('no ffmpeg found, please download it and add it to PATH...')

def convert_to_audio(e : webui.event):
	print('convert_to_audio')
	video_file_path = e.window.get_str(e, 0) # Message from JS
    
	out_path = os.path.splitext(video_file_path)[0] + ".mp3"

	if not os.path.exists(out_path):
		snippet = AudioSegment.from_file(video_file_path)
		snippet.export(out_path, format="mp3")

	return out_path

def file_selector(_ : webui.event):
	print('file_selector')
	selector = tk.Tk()
	selector.wm_attributes('-topmost', 1)
	selector.withdraw()

	file_path = filedialog.askopenfilename()
	selector.destroy()
	return file_path


def main():
	# Create a window object
	MyWindow = webui.window()
	MyWindow.set_size(800, 600)

	# Bind functions
	MyWindow.bind("file_selector", file_selector)
	MyWindow.bind("convert_to_audio", convert_to_audio)

	# Show the window
	MyWindow.show('./index.html')

	# Wait until all windows are closed
	webui.wait()

if __name__ == "__main__":
	main()